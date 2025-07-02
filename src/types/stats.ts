export interface Stats {
  pageViews: number;
}

export interface StatsResponse {
  pageViews: number;
}

export interface StatsUpdateRequest {
  type: "page_view";
  sessionId: string;
}

export interface StatsUpdateResponse {
  success: boolean;
  error?: string;
}

export interface SessionInfo {
  sessionId: string;
  hasVisited: boolean;
}
