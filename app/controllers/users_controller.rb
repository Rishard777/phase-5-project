class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response  
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private
    def user_params
        params.permit(:firstName, :lastName, :email, :username, :password)
    end

    def unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end
end
