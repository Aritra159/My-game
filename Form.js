class Form {

    constructor() {
        this.button = createButton('Tap here to continue');
        this.button1 = createButton('I am good, dad');
        this.button2=createButton('why do you care?');
        this.button3=createButton('why?');
        this.button4=createButton('really good, you wanted to ask something?');
        this.button5=createButton('Hii son how are you doing?');
        
    }
    
    display(){
        this.button.position(700,690);
        this.button5.position(350,750);
        this.button.mousePressed(()=>{
            this.button5.hide();
            this.button.hide();
            gamestate=2;
        })
    }
    display1(){
        this.button1.position(700,700);
        this.button2.position(600,600);
        this.button3.position(600,750);
        this.button4.position(900,750);

        this.button1.mousePressed(()=>{
            this.button4.hide();
            this.button2.hide();
            this.button1.hide();
            this.button3.hide();
            flag=1
        })
        this.button2.mousePressed(()=>{
            this.button4.hide();
            this.button2.hide();
            this.button1.hide();
            this.button3.hide();
            flag=2
        })
        this.button3.mousePressed(()=>{
            this.button4.hide();
            this.button2.hide();
            this.button1.hide();
            this.button3.hide();
            flag=3
        })
        this.button4.mousePressed(()=>{
            this.button4.hide();
            this.button2.hide();
            this.button1.hide();
            this.button3.hide();
            flag=4
        })
        
    }
}

