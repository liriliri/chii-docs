# Chobitsu API

### sendRawMessage(message: string)

Send message to chobitsu.

### setOnMessage(onMessage: (message: string) => void)

Set message handler.

### sendMessage(method: string, params: any): Promise\<any\>

Send message without setting id and get result.

### domain(name: string)

Get domain object.
