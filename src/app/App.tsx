import { MutateNoteDrawer } from 'features/MutateNote';
import { RTKProvider } from './providers/RTKProvider';
import { Button } from 'antd';
import { NotesViewGrid } from 'widgets/NotesViewGrid';

import './styles/global.scss';

export const App = () => {
  return (
    <RTKProvider>
      <div>
        <NotesViewGrid/>
      </div>
    </RTKProvider>
  );
}

