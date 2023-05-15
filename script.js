// complete the given function

function palindrome(str){
let i=0;
	let j=str.length-1;
	let isPallindrome=true;
	while(i<=j)
		{
			if(arr[i]!==arr[j])
			{
				isPallindrome=false;
				break;
			}

			j--;
			i++;
		}

	console.log(isPallindrome ? true : false);
}
module.exports = palindrome
