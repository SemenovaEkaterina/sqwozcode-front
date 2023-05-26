import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
    id: string;
}

interface UserState {
    data?: {
        id: string;
    };
    isAuthModalOpened: boolean;
}

const initialState: UserState = {
        isAuthModalOpened: false,
    },
    userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
            toggleAuthModal: (state, action: PayloadAction<boolean>) => {
                state.isAuthModalOpened = action.payload;
            },
            setUser: (state, action: PayloadAction<UserData>) => {
                state.data = action.payload;
            },
        },
    });

const selectors = {
    isAuthModalOpened: (state: { user: UserState }) =>
        state.user.isAuthModalOpened,
    getUser: (state: { user: UserState }) => state.user.data,
};

export const { setUser, toggleAuthModal } = userSlice.actions;
export const { getUser, isAuthModalOpened } = selectors;

export default userSlice.reducer;
