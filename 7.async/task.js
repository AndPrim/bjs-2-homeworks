class AlarmClock {

    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback){

        if(!time || !callback){
            throw new Error("Отсутствуют обязательные аргументы");
        } else if (this.alarmCollection.find(call => call.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            time: time,
            callback: callback,
            canCall: true
        });
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(call => call.time !== time);
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start(){
        if(this.intervalId){
            return;
        }

        this.intervalId = setInterval( () => {
			this.alarmCollection.forEach( call => {
				if (call.time === this.getCurrentFormattedTime() && call.canCall) {
					call.canCall = false;
					call.callback();          
				}
			})
		}, 1000);
    }

     stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    
    resetAllCalls() {
		this.alarmCollection.forEach( call => call.canCall = true);
	}

    clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
	
}

console.log("________________________Test________________________");

let clock = new AlarmClock;
console.log(clock.getCurrentFormattedTime());
clock.addClock("14:30", "zzzzzzz");
console.log(clock.alarmCollection);