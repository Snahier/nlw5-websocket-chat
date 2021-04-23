import { Request, Response } from "express"
import { SettingsService } from "../services/SettingsService"

export class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body

    const settingsService = new SettingsService()

    try {
      const settings = await settingsService.create({ chat, username })

      return response.json(settings)
    } catch (error) {
      response.status(400).json({ error: error.message })
    }
  }

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params

    const settingsService = new SettingsService()

    const settings = await settingsService.findByUsername(username)

    return response.json(settings)
  }
}
