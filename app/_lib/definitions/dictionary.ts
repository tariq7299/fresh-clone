
export type Dictionary = {
    nav: {
        // Add nav types if needed
    };
    onboarding: {
        business_location: {
            edit: string;
            title: string;
            description: string;
            fields: {
                address: {
                    label: string;
                    placeholder: string;
                };
                city: {
                    label: string;
                    placeholder: string;
                };
                district: {
                    label: string;
                    placeholder: string;
                };
                country: {
                    label: string;
                    placeholder: string;
                };
                street: {
                    label: string;
                    placeholder: string;
                };
                building: {
                    label: string;
                    placeholder: string;
                };
                apartment: {
                    label: string;
                    placeholder: string;
                };
                directions: {
                    label: string;
                    placeholder: string;
                };
            };
            actions: {
                cancel: string;
                save: string;
            };
        };
        validation: {
            address_required: string;
            location_required: string;
            country_required: string;
            city_required: string;
            district_required: string;
            street_required: string;
            building_required: string;
            apartment_required: string;
            directions_required: string;
        };
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
    };
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
                    business_name: string;
                    business_address: string;
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
        };
        sidebar: {
            appointments: string;
            settings: string;
            logout: string;
        };
    };
    table: {
        empty: string;
        filters: {
            clear: string;
            apply: string;
            date: {
                placeholder: string;
            };
            select: {
                placeholder: string;
            };
            string: {
                placeholder: string;
            };
        };
    };
};