
export interface PaymentDetails {
    amount: number;
    type: string;
    projectId?: number | null;
    receiptId?: string;
    date?: string;
    method?: string;
    saveInfo?: boolean;
    email?: string;
    firstName?: string;
    lastName?: string;
  }
  
  export type PaymentMethod = 'credit' | 'paypal' | 'bank';
  
  export interface CardDetails {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    nameOnCard?: string;
  }
  