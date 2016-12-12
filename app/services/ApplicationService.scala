package services

import play.api.libs.json._
import javax.inject.Singleton

@Singleton
class ApplicationService {
	
	def getFrontendInitialData:JsValue = {
		Json.obj(
			"Test_status done" -> "OK",
			"Boolean_val" -> true
		)
	}
}