/**
 * @format
 */
let argv = {};
let origin = process.argv
  .slice(2, process.argv.length)
  .join(" ")
  .replace(/=/g, " ")
  .split(" ");

for (let i = origin.length - 1; i >= 0; i--) {
  let str = origin[i];
  if (/-[a-z|A-Z]{1,}/.test(str)) {
    if (i == origin.length - 1) {
      argv[str] = true;
    } else if (i == origin.length - 2) {
      argv[str] = origin[i + 1];
    }
    origin = origin.slice(0, i);
  }
}
argv.alias = (origin, replacedKey) => {
  if (argv[origin]) {
    argv[replacedKey] = argv[origin];
    // delete argv[origin];
  }
  return argv;
};

module.exports = { argv };
