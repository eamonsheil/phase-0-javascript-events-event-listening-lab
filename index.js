const input = document.querySelector('#input')

function addingEventListener( funsh) {
input.addEventListener('click', funsh)
}

const clickAlert = () => alert("I was Clicked!")

addingEventListener(clickAlert)


