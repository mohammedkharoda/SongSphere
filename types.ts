import { metadata } from './app/layout';
import Stripe from "stripe";

export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name: string;
    avatar_url?: string;
    billing_address?: Stripe.Address;
    payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

export interface Products {
    id: string;
    name: string;
    description: string;
    metadata?: Stripe.Metadata;
    images?: string[];
    active?: boolean
}

export interface Price {
    id: string;
    product_id?: string;
    active?: boolean;
    currency?: string;
    unit_amount?: number;
    interval?: string;
    interval_count?: number;
    description?: string;
    metadata?: Stripe.Metadata;
    type?: Stripe.Price.Type;
    trail_period_days?: number | null;
    products?: Products

}

export interface Subscription {
    id: string;
    user_id: string;
    status?: Stripe.Subscription.Status;
    metadata?: Stripe.Metadata;
    price_id?: string;
    quantity?: number;
    cancel_at_period_end?: boolean;
    created: string;
    current_period_start: string;
    current_period_end: string;
    ended_at?: string;
    cancel_at?: string;
    canceled_at?: string;
    trail_start?: string;
    trail_end?: string;
    price?: Price;
}