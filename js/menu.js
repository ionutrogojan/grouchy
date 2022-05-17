import { canvas } from "./canvas.js";

const resetDropdowns = (currentDropdown) => {
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active");
    })
}

const saveCanvas = () => {
    canvas.toBlob((blob) => {
        const a = document.createElement('a');
        document.body.append(a);
        a.download = 'grouchy.png';
        a.href = URL.createObjectURL(blob);
        a.click();
        document.body.removeChild(a);
    });
}

const refreshPage = () => {
    window.location.reload();
}

document.addEventListener("click", (e) => {
    const isMenuButton = e.target.matches("[data-dropdown-button]");
    let currentDropdown;
    if (isMenuButton) {
        console.log("click");
        currentDropdown = e.target.querySelector("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    const isMenuOption = e.target.matches("[data-dropdown-option]");
    if (isMenuOption) {
        let currentOption;
        currentOption = e.target.getAttribute("data-dropdown-option");
        console.log(`option ${currentOption} fired!`);
        switch (currentOption) {
            case "file_new":

            break;
            case "file_open":

            break;
            case "file_recent":

            break;
            case "file_save":
                saveCanvas();
            break;
            case "file_refresh":
                refreshPage();
            break;
            case "edit_undo":

            break;
            case "edit_redo":

            break;
            case "edit_cut":

            break;
            case "edit_copy":

            break;
            case "edit_paste":

            break;
            case "edit_delete":

            break;
            case "view_guides":

            break;
            case "view_preferences":

            break;
            case "view_fullscreen":

            break;
            case "help_docs":

            break;
            case "help_notes":

            break;
            case "help_about":

            break;
        }
    }

    resetDropdowns(currentDropdown);
});