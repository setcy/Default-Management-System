export interface ReasonInfo {
    id?: number
    reason?: string
    enabled?: boolean
}

export interface ReasonChangeRequest {
    id?: number
    enabled?: boolean
}

export interface ApplyInfo {
    cus_id?: string;
    cus_name?: string;
    degree?: string;
    identify_name?: string;
    reason?: string;
    request_time?: string;
    verify_condition?: string;
}

export interface BaseInfo {
    cus_id?: string;
    cus_name?: string;
    degree?: string;
    identify_name?: string;
    reason?: string;
    register_time?: string;
    verify_condition?: string;
    verify_time?: string;
}

export interface RenewInfo {
    cus_id?: string;
    degree?: string;
    identify_name?: string;
    reason?: string;
    rebirth_reason?: string;
    register_time?: string;
    verify_condition?: string;
}

export interface RenewApproveInfo {
    cus_id: string;
    cus_name: string;
    degree: string;
    identify_name: string;
    reason: string;
    rebirth_reason: string;
    request_time: string;
    verify_condition: string;
}