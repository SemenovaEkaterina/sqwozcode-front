import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthModal, { AuthModalFormData } from "../components/auth-modal";
import useApiClient from "../libs/api-client";
import { useUserSession } from "../libs/user-session";
import {
    isAuthModalOpened,
    setUser,
    toggleAuthModal,
} from "../store/user-slice";

const AuthModalContainer = () => {
    const apiClient = useApiClient();
    const dispatch = useDispatch();

    const { needAuth, userId, rejectAuth, saveUserId } = useUserSession();

    const isOpened = useSelector(isAuthModalOpened);

    const handleSubmit = useCallback(async (data: AuthModalFormData) => {
        const response = await apiClient.createUser(data);

        saveUserId(response.id);
        dispatch(setUser({ id: response.id }));

        dispatch(toggleAuthModal(false));
    }, []);

    useEffect(() => {
        if (needAuth) {
            dispatch(toggleAuthModal(true));
        }
        if (userId) {
            dispatch(setUser({ id: userId }));
        }
    }, [needAuth, userId]);

    const handleClose = useCallback(() => {
        rejectAuth();
        dispatch(toggleAuthModal(false));
    }, []);

    return (
        <AuthModal
            isOpened={isOpened}
            onSubmit={handleSubmit}
            onClose={handleClose}
        />
    );
};

export default AuthModalContainer;
