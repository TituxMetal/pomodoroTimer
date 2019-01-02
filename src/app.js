const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')
let countdown

const timer = (seconds) => {
  const now = Date.now()
  const then = now + seconds * 1000

  clearInterval(countdown)
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondLeft = Math.round((then - Date.now()) / 1000)

    if (secondLeft < 0) {
      clearInterval(countdown)
      return
    }

    displayTimeLeft(secondLeft)
  }, 1000)
}

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const remainderSeconds = `${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`
  const remainderMinutes = `${minutes % 60 < 10 ? '0' : ''}${minutes % 60}`
  const remainderHours = `${hours % 60 < 1 ? '' : hours + ':'}`
  const displayTime = `${remainderHours}${remainderMinutes}:${remainderSeconds}`

  document.title = displayTime
  timerDisplay.textContent = displayTime
}

const displayEndTime = (timestamp) => {
  const end = new Date(timestamp)
  const hours = end.getHours()
  const minutes = end.getMinutes()

  endTime.textContent = `Be Back At ${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

const startTimer = event => {
  const time = event.target.dataset.time | 0

  event.preventDefault()
  timer(time)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', event => {
  const mins = (event.target.minutes.value | 0) * 60

  event.preventDefault()
  event.target.reset()
  timer(mins)
})
