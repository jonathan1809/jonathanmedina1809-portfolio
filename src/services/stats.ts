import { ApiService, type ApiResponse } from "./api";
import type {
  Stats,
  StatsResponse,
  StatsUpdateRequest,
  StatsUpdateResponse,
} from "@/types/stats";

class StatsService {
  private baseUrl = "/api/stats";

  /**
   * Fetch current statistics from the API
   */
  async getStats(): Promise<Stats> {
    try {
      const response: ApiResponse<StatsResponse> =
        await ApiService.get<StatsResponse>(this.baseUrl);

      if (!response.success || !response.data) {
        throw new Error(response.error || "Failed to fetch stats");
      }

      return {
        pageViews: response.data.pageViews || 0,
      };
    } catch (error) {
      console.error("Error fetching stats:", error);
      throw error;
    }
  }

  /**
   * Increment page view counter
   */
  async incrementPageView(sessionId: string): Promise<StatsUpdateResponse> {
    try {
      const response: ApiResponse<StatsUpdateResponse> =
        await ApiService.post<StatsUpdateResponse>(this.baseUrl, {
          type: "page_view",
          sessionId,
        } as StatsUpdateRequest);

      if (!response.success || !response.data) {
        throw new Error(response.error || "Failed to increment page view");
      }

      return response.data;
    } catch (error) {
      console.error("Error incrementing page view:", error);
      throw error;
    }
  }

  /**
   * Check if a session has already been counted
   */
  private getSessionKey(sessionId: string): string {
    return `session_${sessionId}`;
  }

  /**
   * Mark session as visited in sessionStorage
   */
  markSessionAsVisited(): void {
    sessionStorage.setItem("hasVisited", "true");
  }

  /**
   * Check if current session has been visited
   */
  hasSessionBeenVisited(): boolean {
    return sessionStorage.getItem("hasVisited") === "true";
  }

  /**
   * Get or create session ID
   */
  getSessionId(): string {
    let sessionId = sessionStorage.getItem("sessionId");

    if (!sessionId) {
      sessionId =
        Date.now().toString() + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem("sessionId", sessionId);
    }

    return sessionId;
  }
}

// Export a singleton instance
export const statsService = new StatsService();
