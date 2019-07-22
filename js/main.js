const tabItems = document.querySelectorAll('.tab-item');
const tabIContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    // add border to cutrrent tab
    this.classList.add('tab-border');
    //grap content item from dom 
    const tabContentItem= document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
    console.log(this.id);
}
function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));

}
function removeShow()
{
    tabIContentItems.forEach(item=>item.classList.remove('show'));

}

tabItems.forEach(item=>item.addEventListener('click' , selectItem));

