#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2] || "NMVT";
const gitCheckoutCommand = `git clone --depth 1 https://github.com/WebNaresh/vite-react-app-mui-tailwindcss--integrate.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;
const removeOriginCommand = `cd ${repoName} && git remote remove origin`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
  process.exit(-1);
} else {
  console.log(installDepsCommand);
  console.log(`Installing dependencies for ${repoName}`);
  const installedDeps = runCommand(installDepsCommand);

  if (!installedDeps) {
    process.exit(-1);
  }

  // Remove the default "origin" remote
  runCommand(removeOriginCommand);

  console.log(
    `🚀 ~ file: cli.js:42 ~ removeOriginCommand:`,
    removeOriginCommand
  );
  console.log(
    `Congratulations! You are ready. Follow the following commands to start`
  );
  console.log(`cd ${repoName} && yarn dev`);
}
