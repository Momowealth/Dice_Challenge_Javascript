// for user 1
const UserNumberOne = Math.floor(Math.random() * 6) + 1

const firstUserImage = 'Images/dice' + UserNumberOne + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstUserImage)

// for user 2
const UserNumberTwo = Math.floor(Math.random() * 6) + 1

const SecondUserImage = 'Images/dice' + UserNumberTwo + '.png';
document.querySelectorAll('img')[1].setAttribute('src', SecondUserImage)


if (UserNumberOne > UserNumberTwo) {
    document.querySelector('h1').innerHTML = "The winner is User 1";
}
else{
    document.querySelector('h1').innerHTML = "The winner is User 2";

}