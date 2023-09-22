# Kaholo XML Plugin
Extensible Markup Language (XML) lets you define and store data in a shareable manner. XML supports information exchange between computer systems such as websites, databases, and third-party applications.

This plugin enables Kaholo to parse XML input into JSON-style objects so that elements may be accessed conveniently through the Kaholo code layer.

If the XML is a string and not a file on the disk, the string may be written to file using the [Kaholo Text Editor Plugin](https://github.com/Kaholo/kaholo-plugin-text-editor/blob/master/README.md) method "Create New File" by toggling parameter "File Content" to code and then providing the string variable containing XML or a function that returns the XML string.

For example, given this XML to parse:

    <note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
    </note>

This object will be returned in Kaholo Final Result of the action execution:

    {
      "note": {
        "to": {
          "_text": "Tove"
        },
        "from": {
          "_text": "Jani"
        },
        "heading": {
          "_text": "Reminder"
        },
        "body": {
          "_text": "Don't forget me this weekend!"
        }
      }
    }

For example, if the action parsing this XML has ID of `XML1`, then the text body of "Don't forget me this weekend!" would be accessible in the Kaholo code layer as `kaholo.action.XML1.result.note.body._text`.

## Method: Parse XML
This method parses the input XML. It is the only method of this plugin.

### Parameters: XML File Path
The absolute or relative path on the Kaholo Agent of the XML file to be parsed. If relative path is given, it is relative to the working directory of the agent. On a default agent this is `/twiddlebug/workspace`.