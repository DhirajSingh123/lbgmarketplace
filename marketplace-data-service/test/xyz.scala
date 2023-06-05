object Constants {
	val numberOfUsers: Int = System.getProperty("numberOfUsers").toInt
	val duration: FiniteDuration = System.getProperty("durationMinutes").toInt.minutes
	val pause: FiniteDuration = System.getProperty("pauseBetweenRequestsMs").toInt.millisecond
	val responseTimeMs = 500
	val responseSuccessPercentage = 99
	private val url: String = System.getProperty("url")
	private val repeatTimes: Int = System.getProperty("numberOfRepetitions").toInt
	private val successStatus: Int = 200
	private val isDebug = System.getProperty("debug").toBoolean

	val httpProtocol = http
		.baseURL(url)
		.check(status.is(successStatus))
		.extraInfoExtractor { extraInfo => List(getExtraInfo(extraInfo)) }

	def createScenario(name: String, feed: FeederBuilder[_], chains: ChainBuilder*): ScenarioBuilder = {
		if (Constants.repeatTimes > 0) {
			scenario(name).feed(feed).repeat(Constants.repeatTimes) {
				exec(chains).pause(Constants.pause)
			}
		} else {
			scenario(name).feed(feed).forever() {
				exec(chains).pause(Constants.pause)
			}
		}
	}

	private def getExtraInfo(extraInfo: ExtraInfo): String = {
		if (isDebug
			|| extraInfo.response.statusCode.get != successStatus
			|| extraInfo.status.eq(Status.apply("KO"))) {
			",URL:" + extraInfo.request.getUrl +
				" Request: " + extraInfo.request.getStringData +
				" Response: " + extraInfo.response.body.string
		} else {
			""
		}
	}
}