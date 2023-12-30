/* AppMode: The enumerated type for AppMode. */

const AppMode = {
    LOGIN: "LoginMode",
    HOMEPAGE: "HomePage",
    SELECTION: "SelectionMode",
    CURRENT: "CurrentMode",
    COMMENTS: "CommentMode"
};
 //This ensures that the object is immutable.
Object.freeze(AppMode);

export default AppMode;
