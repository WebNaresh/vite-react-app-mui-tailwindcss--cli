#!/usr/bin/env node

const { execSync } = require("child_process");
const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failde to execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/WebNaresh/vite-react-app-mui-tailwindcss--integrate.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;

console.log(`Clonning the  repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(-1);
} else {
  console.log(installDepsCommand);
  //   runCommand(`mkdir ${repoName}`);
  console.log(`Installing dependicies for ${repoName}`);
  const installedDeps = runCommand(installDepsCommand);
  if (!installedDeps) {
    process.exit(-1);
  }
  console.log(
    ` Congratulation! You are ready  . Follow the following commands to start`
  );
  console.log(`cd ${repoName} && yarn dev`);
}
