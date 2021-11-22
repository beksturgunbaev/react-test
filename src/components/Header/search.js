export const Search = () => {

    let searchIcon = document.querySelector('.search-icon');
    let searchDiv = document.querySelector('.search-div');

    // searchIcon.onclick = function() {
    //     searchDiv.classList.toggle('active');
    // }

    return (
        <>
            <div className="search-div">
                <form action="">
                    <input type="search" placeholder="Search"/>
                </form>
            </div>
        </>
    );
}