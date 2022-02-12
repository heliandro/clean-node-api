import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 500,
      body: new Error('Internal server error!')
    }
  }
}
