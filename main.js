function setTimerUpdater() {
  let timer = setInterval(() => {
    const timestampInput = document.getElementById('commit_timestamp');
    const date = new Date();
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    };
    const currentTime = date.toLocaleTimeString('en-US');
    const currentDate = date.toLocaleDateString('en-US', options);
    timestampInput.value = `${currentDate} ${currentTime}`;
  }, 1000);
}

function generateCommitDescription(e){
    e.preventDefault();
    const commit_description = document.querySelector('.form_control__commit_full_description');
    const commit_type = document.querySelector('.form_controls__commit_select').value;
    const commit_message = document.querySelector('.form_controls__commit_message').value;
    if (commit_message.length === 0){
        alert('Enter commit message');
        return;
    }
    const commit_time = document.querySelector('.form_controls__commit_time').value;

    commit_description.value = `git commit -m ${commit_type} ${commit_message} (${commit_time})` ;
}

function mainLoader() {
    setTimerUpdater();
    document.querySelector('.form_actions__generate_button').addEventListener('click', generateCommitDescription);
}


window.addEventListener('load', mainLoader);