class Rectangle{
    x = Math.random() * 500;
    y = Math.random() * 500;
    width;
    height
    constructor(width,height) {

        this.width = width
        this.height = height
    }
    randomColor(){
        let red = Math.random() * 255
        let green = Math.random() * 255
        let blue = Math.random() * 255
        return (`rgb(${red}, ${green} , ${blue})`)
    }
    drawRec(){
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext('2d')
        ctx.beginPath() // dat but ve
        ctx.rect(this.x,this.y,this.width,this.height) // cong thuc ve hinh chu nhat
        ctx.fillStyle = this.randomColor() //chon mau cho hinh
        ctx.fill() // do mau cho hinh ( mac dinh mau den )
        ctx.closePath() // dong but
    }
}

let rec = new Rectangle(50,20)
let rec1 = new Rectangle(50,20)
rec.drawRec()
rec1.drawRec()