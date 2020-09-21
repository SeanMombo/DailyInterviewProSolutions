// Hi, here's your problem today. This problem was recently asked by Facebook:

// Given a list of words, for each word find the shortest unique prefix. You can assume a word will not be a substring of another word (ie play and playing won't be in the same words list)

// Example
// Input: ['joma', 'john', 'jack', 'techlead']
// Output: ['jom', 'joh', 'ja', 't']
// Here's some starter code:

// def shortest_unique_prefix(words):
//   # Fill this in.

// print(shortest_unique_prefix(['joma', 'john', 'jack', 'techlead']))
// # ['jom', 'joh', 'ja', 't']

class Node {
    constructor() {
        this.child = {};
        this.freq = 0;
    }
}

function shortest_unique_prefix(words) {
    //create new trie
    let head = new Node();
    let ans = [];


    //insert single word into trie
    function insertNode(root, word) {
        for(c of word) {
            if (c in root.child) {
                root.child[c].freq ++;
                root = root.child[c];
            } else {
                let n = new Node();
                root.child[c] = n;
                n.freq++;
                root = root.child[c];
            }
        }
    }

    //search trie for freq 1 nodes
    function searchTrie(root, word) {
        for(let i = 0; i < word.length; i++) {
            let c = word[i];
            if (c in root.child) {
                if (root.child[c].freq === 1) {
                    ans.push(word.slice(0, i + 1));
                    break;
                } else {
                    root = root.child[c];
                }
            } 
        }
    }

    //insert all words into trie
    for(word of words) {
        insertNode(head, word)
    };
    
    //insert all words into trie
    for(word of words) {
        searchTrie(head, word)
    };

    return ans;
}

console.log(shortest_unique_prefix(['joma', 'john', 'jack', 'techlead']))