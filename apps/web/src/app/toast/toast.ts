export interface Toast {
    /**
     * The message to display
     */
    message: string;
    /**
     * The type of the toast
     */
    type: ToastType;
    /**
     * The id of the toast
     */
    id: number;
    /**
     * Whether the toast is open or not
     */
    isOpen: boolean;
}

export const enum ToastType {
    /**
     * Success! Poggers!
     */
    Success = "Success",
    /**
     * Error!
     */
    Error = "Error",
    /**
     * Warning!
     */
    Warning = "Warning",
    /**
     * Info message
     */
    Info = "Info",
}