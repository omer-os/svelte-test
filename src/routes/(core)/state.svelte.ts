type Session = {
  id: string
  timer: string
}
export class Pomodoro {
  sessions: Session[] = $state([])
  timer = $state(0)
  timerRunning = $state(false)

  $effect(() => {
    console.log("s");


  });

  }
