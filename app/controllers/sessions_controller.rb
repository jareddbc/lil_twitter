class SessionsController < ApplicationController

  def create
    user = User.where(email: params[:email]).first
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: session_as_json
    else
      render json: {error: 'bad username or password'}, status: :unauthorized
    end
  end

  def show
    render json: session_as_json
  end

  def destroy
    session.clear
    render json: session_as_json
  end

  private

  def session_as_json
    session.to_hash.except('session_id', '_csrf_token')
  end
  
end
