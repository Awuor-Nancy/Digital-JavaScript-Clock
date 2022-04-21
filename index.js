document.addEventListener('DCMContentLoaded', () => requestAnimationFrame(updateTime)
)
function updateTime() {
    document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd")+ "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k")+ "'");
    document.documentElement.style.setProperty('--timer-mins', "'" + moment().format("mm")+ "'");
    document.documentElement.style.setProperty('--timer-secs', "'" + moment().format("ss")+ "'");
    requestAnimationFrame(updateTime); 
}