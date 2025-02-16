export type Dictionary = {
    nav: {
        // ... nav translations
    },
    onboarding: {
        business_capacity: {
            title: string;
            subtitle: string;
            description: string;
            form: {
                select: {
                    label: string;
                    placeholder: string;
                    person: string;
                    people: string;
                };
                validation: {
                    required_error: string;
                };
            };
        };
        // ... other onboarding translations
    };
    // ... other translations
    dashboard: {
        appointments: {
            title: string;
            empty: string;
            table: {
                columns: {
                    id: string;
                    total_duration: string;
                    total_price: string;
                    status: string;
                    update_status: string;
                    payment_method: string;
                    services: string;
                    booking_date: string;
                    start_time: string;
                    end_time: string;
                };
                actions: {
                    show_services: string;
                    update_status: string;
                    updating: string;
                };
                services_dialog: {
                    title: string;
                    caption: string;
                    total: string;
                    currency: string;
                    duration_unit: string;
                };
                filters: {
                    clear: string;
                    apply: string;
                    business_name: {
                        placeholder: string;
                    };
                    status: {
                        placeholder: string;
                        label: string;
                        options: {
                            completed: string;
                            cancelled: string;
                            confirmed: string;
                        };
                    };
                    date: {
                        placeholder: string;
                        label: string;
                    };
                };
            };
        },
        sidebar: {
            appointments: string;
            settings: string;
            logout: string;
        };
    };
}; 