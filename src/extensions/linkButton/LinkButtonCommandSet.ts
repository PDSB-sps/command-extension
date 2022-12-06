import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'LinkButtonCommandSetStrings';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ILinkButtonCommandSetProperties {
  // This is an example; replace with your own properties
  sampleTextOne: string;
  sampleTextTwo: string;
}

const LOG_SOURCE: string = 'LinkButtonCommandSet';

export default class LinkButtonCommandSet extends BaseListViewCommandSet<ILinkButtonCommandSetProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized LinkButtonCommandSet');
    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
let websites=this.context;
console.log("websites",websites);

    var Libraryurl = this.context.pageContext.list.title; 
    console.log("Libraryurl",Libraryurl);
    const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    const compareOneCommand2: Command = this.tryGetCommand('COMMAND_2');
  
    if (compareOneCommand) {
      // This command make the button visible for the below Librayurl list only.
     compareOneCommand.visible =( Libraryurl == "Periods" );
    }
    if (compareOneCommand2) {
      // This command make the button visible for the below Librayurl list only.
     compareOneCommand2.visible =( Libraryurl == "Rooms");
    }
  }


  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'COMMAND_1':
        window.open("https://pdsb1.sharepoint.com/sites/Rooms/Demo/_layouts/15/Reorder.aspx?List=%7b6a8da86b-8e23-4fde-b998-c310d195c5d2%7d&xsdata=MDV8MDF8fDgxMmQ0MzYzODAxMTRkZjA5MDY4MDhkYWQxNTFlZGE4fGE0OTQ3NDNmNzIwMTQ5NGRhNDUyZjQ4YzUzODhjNGMwfDB8MHw2MzgwNTI0NDcwMzYxNDk4NjR8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxNVFkyT1RZME56a3dNamMwTkRzeE5qWTVOalEzT1RBeU56UTBPekU1T20xbFpYUnBibWRmVFVSamVVMXFaM2hPYWxWMFdUSkpNMWxUTURCTlYwbDNURlJvYlU5VVZYUlpiVkpxVGxSamVrMUhSbWhhYWxwdFFIUm9jbVZoWkM1Mk1nPT18YzFkMjczMjM1N2M3NDE0ZTJlMTYwOGRhZDE1MWVkYTZ8MzllNDJiZTM5ZjJjNGYxZDhiZjEyNDFlYWI2NGI1NDc%3D&sdata=ajVEN2xEbFVYNFpSVmppQnlEU2puQWgzOURRVnV3TE5vSlVMb3ovbmtxUT0%3D&ovuser=a494743f-7201-494d-a452-f48c5388c4c0%2Cnavpreet.kaur1%40peelsb.com&OR=Teams-HL&CT=1669648033248&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjEwMjgwNzIwMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D")
        break;
     case 'COMMAND_2':
      window.open("https://pdsb1.sharepoint.com/sites/Rooms/Demo/_layouts/15/Reorder.aspx?List=%7b6a8da86b-8e23-4fde-b998-c310d195c5d2%7d&xsdata=MDV8MDF8fDgxMmQ0MzYzODAxMTRkZjA5MDY4MDhkYWQxNTFlZGE4fGE0OTQ3NDNmNzIwMTQ5NGRhNDUyZjQ4YzUzODhjNGMwfDB8MHw2MzgwNTI0NDcwMzYxNDk4NjR8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxNVFkyT1RZME56a3dNamMwTkRzeE5qWTVOalEzT1RBeU56UTBPekU1T20xbFpYUnBibWRmVFVSamVVMXFaM2hPYWxWMFdUSkpNMWxUTURCTlYwbDNURlJvYlU5VVZYUlpiVkpxVGxSamVrMUhSbWhhYWxwdFFIUm9jbVZoWkM1Mk1nPT18YzFkMjczMjM1N2M3NDE0ZTJlMTYwOGRhZDE1MWVkYTZ8MzllNDJiZTM5ZjJjNGYxZDhiZjEyNDFlYWI2NGI1NDc%3D&sdata=ajVEN2xEbFVYNFpSVmppQnlEU2puQWgzOURRVnV3TE5vSlVMb3ovbmtxUT0%3D&ovuser=a494743f-7201-494d-a452-f48c5388c4c0%2Cnavpreet.kaur1%40peelsb.com&OR=Teams-HL&CT=1669648033248&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMjEwMjgwNzIwMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D")
      break;
      default:
        throw new Error('Unknown command');
    }
  }
}
