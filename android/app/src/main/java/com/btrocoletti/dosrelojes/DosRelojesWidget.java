package com.btrocoletti.dosrelojes;

import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.widget.RemoteViews;

/**
 * Widget con dos relojes. La hora la actualiza el sistema solo (TextClock),
 * así que no hace falta ningún servicio ni alarma.
 */
public class DosRelojesWidget extends AppWidgetProvider {

    @Override
    public void onUpdate(Context context, AppWidgetManager manager, int[] widgetIds) {
        for (int id : widgetIds) {
            RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget_dos_relojes);
            manager.updateAppWidget(id, views);
        }
    }
}
