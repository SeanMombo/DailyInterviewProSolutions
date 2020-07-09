
//initial thoughts

//search every index, at least O(N) time
//dfs
//hashmap to track visited indicies


// Time complexity: O(N)
// Space complexity: O(N);

function numIslands(grid) {
    //variable
    let numIslands = 0;
    let numR = grid.length;
    let numC = grid[0].length;

    let vis = {};

    //functions
    //1 checkValid
    function checkValid(r, c) {
        if (r < 0 || c < 0 || r >= numR || c >= numC) {
            return false;
        }
        return true;
    }

    //2 dfs
    function dfs(r, c) {
        //base cases
        //return 
        //if water
        //if visited
        //if out of bounds
        if (!checkValid(r,c)) return;
        if (grid[r][c] === 0) return;
        if (`$r-$c` in vis) return;
        

        vis[`$r-$c`] = 1;

        dfs(r-1, c);
        dfs(r+1, c);
        dfs(r, c-1);
        dfs(r, c+1);
    }

    //3 loop and run dfs
    //search every index
    //only run DFS if, not visited and its a 1
    for(let r = 0; r < numR; r++) {
        for(let c = 0; c < numC; c++) {
            if (grid[r][c] === 1 && !(`$r-$c` in vis)) {
                numIslands++;
                dfs(r,c);
            }
        }
    }

    return numIslands;
}

let grid = 
[[1, 1, 0, 0, 0], 
 [0, 1, 0, 0, 1],
 [1, 0, 0, 1, 1],
 [0, 0, 0, 0, 0]];

console.log(numIslands(grid))