function find (str)
{
    var count = 0;
    var aim = ['a', 'e', 'i', 'o', 'u'];
    for(var char of str)
    {
        if(aim.includes(char))
        {
            count++
        }
    }
    return count;
}
console.log("aeiou")
console.log(find("aeiou"))
console.log("hello")
console.log(find("hello"))