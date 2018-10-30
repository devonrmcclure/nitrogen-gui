import net from 'net';

class Connection 
{
	constructor(port = 12321, host = 'localhost')
	{
		this.port = port;
		this.host = host;
		this.conn;
	}

	connect()
	{
		this.conn = net.createConnection(this.port, this.host);
		console.log('Connecting...');
	}

	disconnect()
	{
		this.conn.end();
		console.log('Disconnecting...');
	}
}


export default Connection;