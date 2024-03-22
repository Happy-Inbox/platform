export interface AdaptyWebhookVerificationBody {
  adapty_check: string;
}

// Interface for Event Properties
/**
 * Interface representing properties of a transaction event.
 */
interface EventProperties {
  profile_id: string; // Adapty user ID
  currency: string; // Local currency (defaults to USD)
  price_usd: number; // Product price before Apple/Google cut. Revenue
  proceeds_usd: number; // Product price after Apple/Google cut. Net revenue
  price_local: number; // Product price before Apple/Google cut in local currency. Revenue
  proceeds_local: number; // Product price after Apple/Google cut in local currency. Net revenue
  transaction_id: string; // A unique identifier for a transaction such as a purchase or renewal
  original_transaction_id: string; // The transaction identifier of the original purchase
  purchase_date: string; // The date and time of product purchase in ISO 8601 format
  original_purchase_date: string; // The date and time of the original purchase in ISO 8601 format
  environment: 'Sandbox' | 'Production'; // Can be Sandbox or Production
  vendor_product_id: string; // Product id in Apple/Google store
  event_datetime: string; // The date and time of the event in ISO 8601 format
  store: 'app_store' | 'play_store'; // Can be app_store or play_store
  trial_duration?: string; // Duration of a trial period in days. Sent in a format "{} days", for example, "7 days"
  cancellation_reason?: string; // A reason why the user canceled a subscription
  subscription_expires_at: string; // The Expiration date of subscription. Usually in the future, in ISO 8601 format
  consecutive_payments?: number; // The number of periods, that a user is subscribed without interruptions. Includes the current period
  rate_after_first_year?: boolean; // Boolean indicates that a vendor reduces cuts to 15%. Apple and Google have 30% first-year cut and 15% after it
  promotional_offer_id?: string; // ID of promotional offer as indicated in Product section of Adapty dashboard
  store_offer_category?: 'introductory' | 'promotional'; // Can be introductory or promotional
  store_offer_discount_type?: 'free_trial' | 'pay_as_you_go' | 'pay_up_front'; // Can be free_trial, pay_as_you_go or pay_up_front
  paywall_name?: string; // Name of the paywall where the transaction originated
  paywall_revision?: number; // Revision of the paywall where the transaction originated. The value is set to 1
  developer_id?: string; // Developer (SDK) ID of the placement where the transaction originated
  ab_test_name?: string; // Name of the A/B test where the transaction originated
  ab_test_revision?: number; // Revision of the A/B test where the transaction originated. The value is set to 1
  cohort_name?: string; // Name of the audience to which the profile belongs to
  profile_event_id?: string; // Unique event ID that can be used for deduplication
  store_country?: string; // The country sent to us by the store
  profile_ip_address?: string; // Profile IP (can be IPv4 or IPv6, with IPv4 preferred when available). It is updated each time IP of the device changes
  profile_country?: string; // Determined by Adapty, based on profile IP
  profile_total_revenue_usd?: number; // Total revenue for the profile, refunds included
  variation_id?: string; // Unique ID of the paywall where the purchase was made
  access_level_id?: string; // Paid access level ID
  is_active?: boolean; // Boolean indicating whether paid access level is active for the profile
  will_renew?: boolean; // Boolean indicating whether paid access level will be renewed
  is_refund?: boolean; // Boolean indicating whether transaction is refunded
  is_lifetime?: boolean; // Boolean indicating whether paid access level is lifetime
  is_in_grace_period?: boolean; // Boolean indicating whether profile is in grace period
  starts_at?: string; // Date and time when paid access level starts for the user in ISO 8601 format
  renewed_at?: string; // Date and time when paid access will be renewed in ISO 8601 format
  expires_at?: string; // Date and time when paid access will expire in ISO 8601 format
  activated_at?: string; // Date and time when paid access was activated in ISO 8601 format
  billing_issue_detected_at?: string; // Date and time of billing issue in ISO 8601 format
}

/**
 * Enum representing various events related to subscriptions and purchases.
 */
export enum EventType {
  /**
   * A user has activated a subscription without a trial period i.e. he was billed instantly.
   */
  subscription_started = 'subscription_started',
  /**
   * A subscription was renewed and the user was charged. For both trial and non-trial subscriptions, this event is sent starting from the second billing.
   */
  subscription_renewed = 'subscription_renewed',
  /**
   * A user has canceled a subscription and it is completely finished.
   */
  subscription_expired = 'subscription_expired',
  /**
   * A user has activated a trial subscription.
   */
  trial_started = 'trial_started',
  /**
   * A trial period has ended and the user was billed, i.e. first purchase was made.
   */
  trial_converted = 'trial_converted',
  /**
   * A trial has expired without converting to a subscription.
   */
  trial_expired = 'trial_expired',
  /**
   * Any non-subscription purchase e.g. lifetime access or consumable product such as coins.
   */
  non_subscription_purchase = 'non_subscription_purchase',
  /**
   * An attempt to charge the user was made, but a billing issue happened. Usually, it means the user doesn't have enough card balance.
   */
  billing_issue_detected = 'billing_issue_detected',
  /**
   * The payment was not successful and the user entered into a grace period. The user still has access to the premium features of your app until the grace period is finished.
   */
  entered_grace_period = 'entered_grace_period',
  /**
   * A user turned off subscription auto-renewal during the trial. A user still has access to the premium features of your app until the end of the trial period.
   */
  trial_renewal_cancelled = 'trial_renewal_cancelled',
  /**
   * A user turned on subscription auto-renewal during the trial period.
   */
  trial_renewal_reactivated = 'trial_renewal_reactivated',
  /**
   * A user turned off subscription auto-renewal. A user still has access to the premium features of your app until the end of the subscription period.
   */
  subscription_renewal_cancelled = 'subscription_renewal_cancelled',
  /**
   * A user turned on subscription auto-renewal.
   */
  subscription_renewal_reactivated = 'subscription_renewal_reactivated',
  /**
   * A subscription was refunded (e.g. by Apple support).
   */
  subscription_refunded = 'subscription_refunded',
  /**
   * Non-subscription purchase was refunded.
   */
  non_subscription_purchase_refunded = 'non_subscription_purchase_refunded',
  /**
   * User activated subscription pause (Android only).
   */
  subscription_paused = 'subscription_paused',
  /**
   * A user's subscription has been deferred, ie they were granted free usage time (Android only). Usually, it happens in response to an API call from your servers.
   */
  subscription_deferred = 'subscription_deferred',
  /**
   * User's access level updated (Webhook only).
   */
  access_level_updated = 'access_level_updated',
}

// Main Object Model
export interface AdaptyEvent {
  adapty_check?: string;
  profile_id: string;
  customer_user_id: string | null;
  idfv: string;
  idfa: string;
  advertising_id: string;
  profile_install_datetime: string; // ISO 8601 date
  user_agent: string;
  email: string;
  event_type: EventType;
  event_datetime: string; // ISO 8601 date
  event_properties: EventProperties;
  event_api_version: number;
}

interface PaidAccessLevel {
  id: string;
  is_active: boolean;
  is_lifetime: boolean;
  expires_at: string;
  starts_at: string | null;
  will_renew: boolean;
  vendor_product_id: string;
  store: 'app_store' | 'play_store';
  activated_at: string;
  renewed_at: string;
  unsubscribed_at: string | null;
  billing_issue_detected_at: string | null;
  is_in_grace_period: boolean;
  active_introductory_offer_type:
    | 'free_trial'
    | 'pay_as_you_go'
    | 'pay_up_front'
    | null;
  offer_id: string | null;
  active_promotional_offer_type: string | null;
  active_promotional_offer_id: string | null;
  cancellation_reason: string | null;
  is_refund: boolean;
}

interface Subscription {
  is_active: boolean;
  is_lifetime: boolean;
  expires_at: string;
  starts_at: string | null;
  will_renew: boolean;
  vendor_product_id: string;
  vendor_transaction_id: string;
  vendor_original_transaction_id: string;
  store: 'app_store' | 'play_store';
  activated_at: string;
  renewed_at: string;
  unsubscribed_at: string | null;
  billing_issue_detected_at: string | null;
  is_in_grace_period: boolean;
  active_introductory_offer_type:
    | 'free_trial'
    | 'pay_as_you_go'
    | 'pay_up_front'
    | null;
  offer_id: string | null;
  active_promotional_offer_type: string | null;
  active_promotional_offer_id: string | null;
  cancellation_reason: string | null;
  is_sandbox: boolean;
  is_refund: boolean;
}

export interface CustomerProfile {
  app_id: string;
  profile_id: string;
  customer_user_id: string;
  total_revenue_usd: number;
  segment_hash: string;
  paid_access_levels: {
    [key: string]: PaidAccessLevel;
  } | null;
  subscriptions: {
    [key: string]: Subscription;
  } | null;
  non_subscriptions: any[] | null;
  custom_attributes: Record<string, any>;
  promotional_offer_eligibility: boolean;
  introductory_offer_eligibility: boolean;
}
