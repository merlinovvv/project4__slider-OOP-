var car1 = {
    name: 'Mercedes-Benz S-class W222',
    isTurnOn: false,
    speed: 0,
    engine: {
        v: 1.6,
        horsesPower: 120
    },
    start: function(){
        this.isTurnOn = true;
        this.speed = 10;
    }
};