function preload()
{

}

function setup()
{
   createCanvas(500, 500);
   

   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
}

function draw()
{  
   image(video, 50, 50, 350, 330);

   fill(153, 0, 0)

   rect(30, 20, 40, 400, 20, 5, 20, 5);

   rect(30, 20, 400, 40, 20, 5, 20, 5);

   rect(400, 20, 40, 400, 20, 5, 20, 5);

   rect(40, 380, 400, 40, 20, 5, 20, 5);
    
   fill(0, 0, 0)

   circle(420, 40, 60);

   circle(50, 400, 60);
}

function take_snapshot()
{
    save('myFilterImage.png');
}