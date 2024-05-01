let P=[];
let t=[];
let r; 
let k;

let P0 = 40;
let dt = 0.5;
let tmax = 30;

let grafik; 
    
function setup() {
  createCanvas(400, 600);
  
  r = createInput("0.5");
  r.position(10, 30)
  let p = createP('Konstanta Pertumbuhan');
  p.style('fontsize', '14px');
  p.position(10,-10);
  
  k = createInput("500");
  k.position(10, 80)
  let q = createP('Carrying Capacity');
  q.style('fontsize', '14px');
  q.position(10,40);
  
  solve(); 
  r.changed(solve); 
  k.changed(solve);
  
  grafik = new Chart(this, config);
}

function draw() {
  background(220);
  
  grafik.update();
}

function solve(){
  
  P[0]=P0;
  t[0]=0;
  let rs=float(r.value())
  let kp=float(k.value())
  let iterNum = int(tmax/dt);
  
  for (i=0; i<iterNum; i++){
    P[i+1]=P[i] + dt * rs *P[i]*(1-P[i]/kp)
    t[i+1]=(i+1)*dt;
    
  } 
}