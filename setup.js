var exec = require('child_process').exec;

process.stdout.write('Setting up project...\n');
exec('rm -rf .git && git init && git add . && git commit -m "Initial commit"', (err, stdout, stderr) => {
  if (err) {
    console.log(err);
  }

  exec('npm install', (err, stdout, stderr) => {
    if (err) console.log(err);

    console.log(stdout);
    console.log('Setup Project Completed!');
  });
});
