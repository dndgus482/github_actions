const core = require('@actions/core');

try {
  const exampleInput = core.getInput('example_input');
  console.log(`Example input is: ${exampleInput}`);
  // 여기에 커스텀 로직 추가
} catch (error) {
  core.setFailed(`Action failed with error: ${error.message}`);
}