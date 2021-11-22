class Grid{
  constructor(){
    this.grid = []
    this.directions = [[1,1],[-1,1],[-1,-1],[1,-1],[1,0],[0,1],[-1,0],[0,-1]];
  }
  
  initialize(){
    for (let i=0; i<N; i++){
      var temp = [];
      for (let j=0; j<N; j++){
        var k = 1;
        if (random() < 0.5){
          k = 0;
        }
        temp.push(k);
      }
      this.grid.push(temp);
    }
  }
  
  copy(new_grid){
    for (let i=0; i<N; i++){
      for (let j=0; j<N; j++){
        this.grid[i][j] = new_grid[i][j];
      }
    }
  }
  
  // The main algorithm representing the rules of Game of Life
  apply(){
    var new_grid = [];
    
    for (let i=0; i<N; i++){
      var temp = [];
      for (let j=0; j<N; j++){
        var count = this.search(i,j);
        
        if (this.grid[i][j]==1){
          if (count>=2 && count<=3){
            temp.push(1);
            this.grid[i][j] = 1;
          }else{
            temp.push(0);
            this.grid[i][j] = 0;
          }
        }else{
          if (count==3){
            temp.push(1);
            this.grid[i][j] = 1;
          }else{
            temp.push(0);
            this.grid[i][j] = 0;
          }
        }
      }
      new_grid.push(temp);
    }
        
    //this.grid = new_grid;
    //this.copy(new_grid);
  }
  
  search(i, j){
    var count = 0;
    var x, y;
    for (var dir of this.directions){
      x = i+dir[0];
      y = j+dir[1];
      
      if (x < 0 || x >= N || y < 0 || y >= N){
        continue;
      }
      if (this.grid[x][y]==1){
        count++;
      }
    }
    return count;
  }
        
  update(){
    this.apply();
    this.display();
  }
  
  display(){
    for (let i=0; i<N; i++){
      for (let j=0; j<N; j++){
        var r = map(i, 0, N, 100, 255);
        var g = map(j, 0, N, 100, 255);
        var b = map(i, 0, N, 255, 0);
        
        if (this.grid[i][j]==0){
          r = 0;
          g = 0;
          b = 0;
        }
        
        fill(r,g,b);
        //rect(i*TILESIZE, j*TILESIZE, TILESIZE, TILESIZE);
        ellipse(i*TILESIZE+TILESIZE/2, j*TILESIZE+TILESIZE/2, TILESIZE);
      }
    }
    draw_grid();
  }

}