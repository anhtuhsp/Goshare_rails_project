class ApplicationController < ActionController::API
    # If not right route, return not found
    def not_found
        render json: { error: 'not_found' }
    end
    
    # Authorize request
    def authorize_request
      header = request.headers['Authorization']
      header = header.split(' ').last if header
      begin
        @decoded = JsonWebToken.decode(header)
        @current_user = UserProfile.find(@decoded[:account_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    end
end
