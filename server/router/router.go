package router

import (
	ws "example.com/m/v2/internal/chat"
	"example.com/m/v2/internal/user"
	"github.com/gin-gonic/gin"
)

var r *gin.Engine

func InitRouter(userHandler *user.Handler, wsHandler *ws.Handler) {
	r = gin.Default()

	r.Use(CORSMiddleware())
	r.POST("/registration", userHandler.CreateUser)
	r.POST("/login", userHandler.Login)

	//r.POST("/ws/createRoom", wsHandler.CreateRoom)
	//r.GET("/ws/joinRoom/:roomId", wsHandler.JoinRoom)
	//r.GET("/ws/getRooms", wsHandler.GetRooms)
	//r.GET("/ws/getClients/:roomId", wsHandler.GetClients)

}

func Start(addr string) error {
	return r.Run(addr)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
