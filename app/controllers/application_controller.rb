class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  rescue_from Exception do |exception|
    respond_to do |format|
      format.json{ render json: {error: exception.message}, status: :bad_request }
      format.html{ render text: exception.message }
    end
  end

end
