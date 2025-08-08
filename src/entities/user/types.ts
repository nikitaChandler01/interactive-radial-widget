export interface User {
    id: number;
    isAdmin?: boolean;
    // roles?: TUserRole[];
    timezone_id: string;
    // timezone: TUserTimezone;
    name: string;
    email: string;
    email_verified_at: number | null;
    phone: string | null;
    login?: string;
    created_at: string;
    isCanReadQr?: boolean;
    updated_at: string;
    telegram_username?: string;
    // user_full_information?: TUserFullInformation;
    // user_departments: TDepartment[];
    // user_roles: TUserRole[];
}
